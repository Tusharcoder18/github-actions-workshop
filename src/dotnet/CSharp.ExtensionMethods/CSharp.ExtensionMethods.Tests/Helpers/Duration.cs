namespace CSharp.ExtensionMethods.Tests.Helpers
{
    public enum Duration
    {
        [System.ComponentModel.Description("Eight hours")]
        Day,

        [System.ComponentModel.Description("Five days")]
        Week,

        [System.ComponentModel.Description("Twenty-one days")]
        Month,

        [System.ComponentModel.Description("")]
        HalfYear,

        Year
    }
}