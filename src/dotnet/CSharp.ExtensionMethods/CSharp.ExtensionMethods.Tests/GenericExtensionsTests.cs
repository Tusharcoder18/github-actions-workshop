using NUnit.Framework;

namespace Microsoft.CSharp.Extensions.Tests
{
    [TestFixture]
    public class GenericExtensionsTests
    {
        #region ToJson

        [Test]
        public void ToJson_Empty_String_Input_Test()
        {
            var result = string.Empty.ToJson();
            Assert.IsTrue(result == "\"\"");
        }

        //[Test]
        //public void ToJson_String_Input_Test()
        //{
        //    var result = "hello world".ToJson();
        //    Assert.IsTrue(result == "\hello world"\"");
        //}

        #endregion
    }
}
